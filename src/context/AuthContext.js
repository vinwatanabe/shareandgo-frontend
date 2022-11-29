import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	deleteUser,
} from 'firebase/auth';
import {
	doc,
	collection,
	addDoc,
	setDoc,
	getDoc,
	deleteDoc,
	updateDoc,
	query,
	where,
	getDocs,
} from 'firebase/firestore';

const Context = createContext();

const AuthContext = ({ children }) => {
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const [userData, setUserData] = useState({});
	const [loggedUser, setLoggedUser] = useState({});
	const [destination, setDestination] = useState({});
	const [setupRide, setSetupRide] = useState({});
	const [rideData, setRideData] = useState([]);
	const [rideSelection, setRideSelection] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		if (!loggedUser) {
			setAuthenticated(false);
		} else if (loggedUser) {
			setAuthenticated(true);
		}

		if (authenticated) {
			const getUser = async () => {
				try {
					const docRef = doc(db, 'users', loggedUser.uid);
					const docSnap = await getDoc(docRef);

					if (docSnap.exists()) {
						setUserData(docSnap.data());
					} else {
						console.log('No document');
					}
				} catch (err) {
					console.log(err.message);
				}
			};

			getUser();
		}

		setLoading(false);
	}, [loggedUser, setUserData, authenticated]);

	//Handle Registration
	const handleRegistration = async (values) => {
		try {
			let userUid;
			await createUserWithEmailAndPassword(
				auth,
				values.email,
				values.password
			).then((cred) => {
				userUid = cred.user.uid;
			});

			if (values.accountType === 'Passenger') {
				await setDoc(doc(db, 'users', userUid), {
					firstName: values.firstName,
					lastName: values.lastName,
					accountType: values.accountType,
					phone: values.phone,
					address: {
						street: values.address,
						city: values.city,
						province: values.province,
						zip: values.zip,
					},
					photo: values.photo,
					payment: {
						nameOnCard: values.nameCard,
						cardNumber: values.cardNumber,
						cardExpirationDate: values.expirationDate,
						cardCsc: values.csc,
						cardZipCode: values.cardZipCode,
					},
					rides: [],
					evaluation: '5',
				})
					.then(() => {
						return navigate('/main-passenger');
					})
					.catch((err) => {
						console.log(err.message);
						handleSignOut();
						return navigate('/');
					});
			} else if (values.accountType === 'Driver') {
				await setDoc(doc(db, 'users', userUid), {
					firstName: values.firstName,
					lastName: values.lastName,
					accountType: values.accountType,
					phone: values.phone,
					address: {
						street: values.address,
						city: values.city,
						province: values.province,
						zip: values.zip,
					},
					photo: values.photo,
					payment: {
						bankName: values.bankName,
						institutionNumber: values.institutionNumber,
						transitNumber: values.transitNumber,
						accountNumber: values.accountNumber,
					},
					rides: [],
					evaluation: '5',
				})
					.then(() => {
						return navigate('/main-driver');
					})
					.catch((err) => {
						console.log(err.message);
						handleSignOut();
						return navigate('/');
					});
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	//Handle Login
	const handleSignIn = async (values) => {
		try {
			let userUid;
			await signInWithEmailAndPassword(auth, values.email, values.password)
				.then((resp) => {
					userUid = resp.user.uid;
				})
				.catch((err) => {
					console.log(err.message);
					handleSignOut();
					return navigate('/');
				});

			const docRef = doc(db, 'users', userUid);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				const docData = docSnap.data();

				if (docData.accountType === 'Driver') {
					return navigate('/main-driver');
				} else if (docData.accountType === 'Passenger') {
					return navigate('/main-passenger');
				} else {
					handleSignOut();
					return navigate('/');
				}
			} else {
				console.log('no data found');
				handleSignOut();
				return navigate('/');
			}
		} catch (err) {
			console.log(err.message);
			handleSignOut();
			return navigate('/');
		}
	};

	//Handle Logout
	const handleSignOut = async () => {
		await signOut(auth);
		return navigate('/');
	};

	//Handle Delete User
	const handleDeleteUser = async (event) => {
		event.preventDefault();
		try {
			await deleteDoc(doc(db, 'users', loggedUser.uid));
			deleteUser(auth.currentUser)
				.then(() => {
					handleSignOut();
					navigate('/');
				})
				.catch((err) => {
					console.log(err.message);
				});
		} catch (err) {
			console.log(err.message);
		}
	};

	//Handle Setup Ride
	const handlesetUpRide = async (e, values) => {
		e.preventDefault();

		const rideSetup = {
			currentLocation: values.currentLocation,
			destinationLocation: values.destinationLocation,
			rideDate: values.rideDate,
			rideTime: values.rideTime,
			numOfSeats: values.numOfSeats,
			rideDetails: values.rideDetails,
			driver: {
				uid: auth.currentUser.uid,
				photo: userData.photo,
				firstName: userData.firstName,
				lastName: userData.lastName,
				rating: userData.evaluation,
			},
			passengers: [],
			passengerNum: 0,
			price: '82.40',
			reviews: [],
		};

		setSetupRide(rideSetup);

		navigate('/create-ride');
	};

	//Handle create ride
	const handleCreateRide = async (e, values) => {
		e.preventDefault();

		let rideId;

		try {
			await addDoc(collection(db, 'rides'), values)
				.then((resp) => {
					rideId = resp.id;
				})
				.catch((err) => {
					console.log(err.message);
				});

			const docRef = doc(db, 'rides', rideId);
			await updateDoc(docRef, {
				uid: rideId,
			})
				.then(() => {
					return navigate(`/ride-info/${rideId}`);
				})
				.catch((err) => {
					console.log(err.message);
				});
		} catch (err) {
			console.log(err.message);
		}
	};

	//Handle Cancel Ride
	const handleDestroyRide = async (id) => {
		const docRef = doc(db, 'rides', id);

		await deleteDoc(docRef)
			.then(() => {
				navigate('/main-driver');
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	//Handle Cancel Ride
	const handleFinishRide = async (id) => {
		const docRef = doc(db, 'rides', id);

		await deleteDoc(docRef)
			.then(() => {
				navigate('/ride-complete');
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	//Handle Get Rides
	const handleGetRides = async (values) => {
		const rideDataArray = [];

		const q = query(
			collection(db, 'rides'),
			where('destinationLocation', '==', values.destinationLocation)
		);

		try {
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				rideDataArray.push(doc.data());
			});
		} catch (err) {
			console.log(err.message);
		}

		setRideData(rideDataArray);
		setRideSelection(values);

		navigate('/available-drivers');
	};

	// Handle Request Ride
	const handleRequestRide = async (rideId, numOfPassengers) => {
		try {
			const docRef = doc(db, 'rides', rideId);

			await updateDoc(docRef, {
				passengerNum: numOfPassengers + 1,
				passengers: [
					{
						uid: loggedUser.uid,
						firstName: userData.firstName,
						lastName: userData.lastName,
						fullName: userData.firstName + ' ' + userData.lastName,
						photo: userData.photo,
					},
				],
			})
				.then(() => {
					return navigate('/waiting-ride');
				})
				.catch((err) => {
					console.log(err.message);
				});
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<Context.Provider
			value={{
				authenticated,
				setAuthenticated,
				loading,
				setLoading,
				userData,
				setUserData,
				loggedUser,
				setLoggedUser,
				destination,
				setDestination,
				setupRide,
				setSetupRide,
				rideData,
				setRideData,
				rideSelection,
				setRideSelection,
				handleRegistration,
				handleSignIn,
				handleSignOut,
				handleDeleteUser,
				handlesetUpRide,
				handleCreateRide,
				handleDestroyRide,
				handleFinishRide,
				handleGetRides,
				handleRequestRide,
			}}>
			{children}
		</Context.Provider>
	);
};

export { Context, AuthContext };
