import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../../component/Card';
import AppText from '../../component/Text';
import { useSelectText } from '../../hook/useLang';
import imageProject from './2.png';
import githubIcon from './github.svg';
import icon8200 from './8200.png';
import shopping from './shopping.jpeg';
import weather from './weather.png';
import book from './book.png';

export default function SideProject() {


	return (
		<Card style={{ overflow: 'hidden', position: 'relative', flexDirection: 'column' }}>
			<View style={styles.topRow}>
				<View style={styles.topImages}>
					<TouchableOpacity onPress={() => console.log('Icon pressed')}>
						<a key={'https://github.com/estherwa'} href={'https://github.com/estherwa'}>
							<Image source={icon8200} resizeMode="contain" style={styles.image} />
						</a>
					</TouchableOpacity>
				</View>
				<View style={styles.topImages}>
					<TouchableOpacity onPress={() => console.log('Icon pressed')}>
						<a key={'https://github.com/estherwa'} href={'https://github.com/estherwa'}>
							<Image source={weather} resizeMode="contain" style={styles.image} />
						</a>
					</TouchableOpacity>
				</View>
			</View>

			{/* Middle - Git Icon */}
			<View style={styles.iconContainer}>
				<a key={'https://github.com/estherwa'} href={'https://github.com/estherwa'}>
					<TouchableOpacity onPress={() => console.log('Icon pressed')}>
						<Image source={githubIcon} resizeMode="contain" style={styles.icon} />
					</TouchableOpacity>
				</a>
			</View>

			<View style={styles.bottomRow}>
				<View style={styles.bottomImages}>
					<TouchableOpacity onPress={() => console.log('Icon pressed')}>
						<a key={'https://github.com/estherwa'} href={'https://github.com/estherwa'}>
							<Image source={shopping} resizeMode="contain" style={styles.image} />
						</a>
					</TouchableOpacity>
				</View>
				<View style={styles.bottomImages}>
					<TouchableOpacity onPress={() => console.log('Icon pressed')}>
						<a key={'https://github.com/estherwa'} href={'https://github.com/estherwa'}>
							<Image source={book} resizeMode="contain" style={styles.image} />
						</a>
					</TouchableOpacity>
				</View>
			</View>
		</Card>
	);
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		width: 260,
		height: 250,
		borderRadius: 70
	},
	topRow: {
		flexDirection: 'row',
		marginBottom: 50,
	},
	bottomRow: {
		flexDirection: 'row',
		marginTop: 10,
	},
	topImages: {
		flex: 1,
		marginRight: 40,
		marginLeft: 50,
	},
	bottomImages: {
		flex: 1,
		marginLeft: 50,
		marginRight: 40,
	},
	shopping: {
		flex: 1,
		height: 355,
		width: 305,
		marginRight: 20,
	},
	book: {
		flex: 1,
		height: 355,
		width: 305,
		marginLeft: 20,
	},
	weather: {
		flex: 1,
		height: 355,
		width: 305,
		alignSelf: 'flex-end',
		alignItems: 'flex-end',
	},
	icon8200: {
		flex: 1,
		marginRight: 10,
		height: 355,
		width: 305,
	},
	iconContainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		height: 50,
		width: 50,
		opacity: 0.6,
	},
});
