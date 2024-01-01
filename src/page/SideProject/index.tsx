import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Card from '../../component/Card';
import AppText from '../../component/Text';
import { useSelectText } from '../../hook/useLang';
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
				<TouchableOpacity onPress={() => console.log('Icon pressed')}>
					<a key={'https://github.com/estherwa/8200_project'} href={'https://github.com/estherwa/8200_project'}>
						<Image source={icon8200} resizeMode="contain" style={styles.image} />
					</a>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => console.log('Icon pressed')}>
					<a key={'https://github.com/idanbau/My-Weather-Website-React'} href={'https://github.com/idanbau/My-Weather-Website-React'}>
						<Image source={weather} resizeMode="contain" style={styles.image} />
					</a>
				</TouchableOpacity>
			</View>

			{/* Middle - Git Icon */}
			<View style={styles.iconContainer}>
				<TouchableOpacity onPress={() => console.log('Icon pressed')}>
				<a key={'https://github.com/estherwa'} href={'https://github.com/estherwa'}>
						<Image source={githubIcon} resizeMode="contain" style={styles.git} />
					</a>
				</TouchableOpacity>
			</View>

			<View style={styles.row}>
				<TouchableOpacity onPress={() => console.log('Icon pressed')}>
					<a key={'https://github.com/idanbau/My-Library-Store-Spring'} href={'https://github.com/idanbau/My-Library-Store-Spring'}>
						<Image source={shopping} resizeMode="contain" style={styles.image} />
					</a>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => console.log('Icon pressed')}>
					<a key={'https://github.com/estherwa/estherWahnon_bookStore'} href={'https://github.com/estherwa/estherWahnon_bookStore'}>
						<Image source={book} resizeMode="contain" style={styles.image} />
					</a>
				</TouchableOpacity>
			</View>
		</Card>
	);
}

const imageSize = { width: 330, height: 240 }; // Set a fixed size for the images

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 135,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: windowHeight * 0.02, // Adjusted margin to separate top and bottom rows
	},
	image: {
		width: imageSize.width,
		height: imageSize.height,
		margin: windowWidth * 0.015,
	},
	iconContainer: {

		alignSelf: 'center',
		alignItems: 'center',
		marginTop: windowHeight * 0.01,
		marginBottom: windowHeight * 0.02, // Adjusted margin to separate top and bottom rows
	},
	icon: {
		width: imageSize.width,
		height: imageSize.height,
		opacity: 0.6,
	},
	git: {
		width: 80,
		height: 80,
		opacity: 0.6,
	},
});
