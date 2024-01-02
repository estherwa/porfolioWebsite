import React from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import Card from '../../component/Card';
import AppText from '../../component/Text';
import githubIcon from './github.svg';
import icon8200 from './8200pic.png';
import shopping from './shopping.jpeg';
import weather from './weather.png';
import book from './book.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SideProject() {
	return (
		<Card style={styles.container}>
			<AppText style={{ fontSize: 25, letterSpacing: 1.1, textAlign: "center", marginBottom: 30, fontWeight: "bold" }}>
				Side Projects:
			</AppText>
			<View style={styles.row}>
				<View onPress={() => console.log('Icon pressed')}>
					<a key={'https://github.com/estherwa/8200_project'} href={'https://github.com/estherwa/8200_project'}>
						<View style={styles.imageContainer}>
							<Image source={icon8200}  style={styles.image} />
						</View>
					</a>
				</View>
				<View onPress={() => console.log('Icon pressed')}>
					<a key={'https://github.com/idanbau/My-Weather-Website-React'} href={'https://github.com/idanbau/My-Weather-Website-React'}>
						<View style={styles.imageContainer}>
							<Image source={weather}  style={styles.image} />
						</View>
					</a>
				</View>
			</View>

			{/* Middle - Git Icon */}
			<View style={styles.iconContainer}>
				<View onPress={() => console.log('Icon pressed')}>
					<a key={'https://github.com/estherwa'} href={'https://github.com/estherwa'}>
						<Image source={githubIcon}  style={styles.git} />
					</a>
				</View>
			</View>

			<View style={styles.row}>
				<View onPress={() => console.log('Icon pressed')}>
					<a key={'https://github.com/idanbau/My-Library-Store-Spring'} href={'https://github.com/idanbau/My-Library-Store-Spring'}>
						<View style={styles.imageContainer}>
							<Image source={shopping}  style={styles.image} />
						</View>
					</a>
				</View>
				<View onPress={() => console.log('Icon pressed')}>
					<a key={'https://github.com/estherwa/estherWahnon_bookStore'} href={'https://github.com/estherwa/estherWahnon_bookStore'}>
						<View style={styles.imageContainer}>
							<Image source={book}  style={styles.image} />
						</View>
					</a>
				</View>
			</View>
		</Card>
	);
}

const imageSize = { width: 150, height: 150 };

const styles = ({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		flexDirection: 'column',
		inset: 0,
		zIndex: -1,
	

	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginBottom: 30, // Increase the space between rows

	},
	imageContainer: {
		minWidth: imageSize.width,
		minHeight: imageSize.height,
		width: imageSize.width + 120, // Add more width to contain the image
		height: imageSize.height + 40, // Add more height to contain the image
		overflow: 'hidden',
		margin: 20, // Increase the space between image containers
		borderWidth: 5,
		borderColor: 'pink',
		borderRadius: 10,
		position: "flex",


	},
	image: {
		width: imageSize.width + 116,
		height: imageSize.height + 35,
		opacity: 1,
		position: "absolute",
		objectFit: 'cover',
		zIndex: -1,
		inset: 0
	},
	iconContainer: {
		alignSelf: 'center',
		alignItems: 'center',
		margin: 20,

		objectFit: 'cover',
		zIndex: -1
	},
	git: {
		width: 70,
		height: 70,
		//opacity: 0.6,
	},
});
