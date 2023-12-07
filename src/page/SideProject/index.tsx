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
			<View style={styles.row}>
				<TouchableOpacity onPress={() => console.log('Icon pressed')}>
					<a key={'https://github.com/estherwa'} href={'https://github.com/estherwa'}>
						<Image source={icon8200} resizeMode="contain" style={styles.image} />
					</a>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => console.log('Icon pressed')}>
					<a key={'https://github.com/estherwa'} href={'https://github.com/estherwa'}>
						<Image source={weather} resizeMode="contain" style={styles.image} />
					</a>
				</TouchableOpacity>
			</View>

			{/* Middle - Git Icon */}
			<View style={styles.iconContainer}>
				<a key={'https://github.com/estherwa'} href={'https://github.com/estherwa'}>
					<TouchableOpacity onPress={() => console.log('Icon pressed')}>
						<Image source={githubIcon} resizeMode="contain" style={styles.icon} />
					</TouchableOpacity>
				</a>
			</View>

			<View style={styles.row}>
				<TouchableOpacity onPress={() => console.log('Icon pressed')}>
					<a key={'https://github.com/estherwa'} href={'https://github.com/estherwa'}>
						<Image source={shopping} resizeMode="contain" style={styles.image} />
					</a>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => console.log('Icon pressed')}>
					<a key={'https://github.com/estherwa'} href={'https://github.com/estherwa'}>
						<Image source={book} resizeMode="contain" style={styles.image} />
					</a>
				</TouchableOpacity>
			</View>
		</Card>
	);
}

const styles = StyleSheet.create({
	container: {
		overflow: 'hidden',
		position: 'relative',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 65, // Add more padding around the entire component
	},
	row: {
		flexDirection: 'row',
		marginBottom: windowHeight * 0.03,
		marginTop: windowHeight * 0.03,
		marginRight: windowHeight * 0.3,
		marginLeft: windowHeight * 0.3,
	},
	image: {
		flex: 1,
		width: windowWidth * 0.25, // Adjusted width to make images closer to the icon
		height: windowHeight * 0.25, // Adjusted height to make images larger
		margin: windowWidth * 0.015, // Adjusted margin to make images closer to the icon

	},
	iconContainer: {
		alignSelf: 'center',
		alignItems: 'center',
		marginTop: windowHeight * 0.01,
	},
	icon: {
		height: windowHeight * 0.1,
		width: windowHeight * 0.1,
		opacity: 0.6,
	},
});
