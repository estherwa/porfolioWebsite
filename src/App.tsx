import React, { useEffect, useState, useRef } from 'react';
import { ScrollView, View, TouchableOpacity, Dimensions } from 'react-native';
import Page from './component/Page';
import LangSelector from './component/LangSelector';
import { Lang, langs, LanguageContext } from './hook/useLang';
import Profile from './page/Profile';
import SideProject from './page/SideProject';
import Skills from './page/Skills';
import ContactMe from './page/ContactMe';
import Story from './page/Story';
import AppText from './component/Text';
import ScrollDownIndicator from './component/ScrollDownIndicator';
import OpenSources from './page/OpenSources';
import Languages from './page/Languages';

const windowHeight = Dimensions.get('window').height;

function App() {
	const scrollViewRef = useRef<ScrollView>(null);

	useEffect(() => {
		const initializeApp = async () => {
			await new Promise(resolve => setTimeout(resolve, 2000));

			const root = document.getElementById('root');
			root?.classList.remove('invisible');
		};

		initializeApp();
	}, []);

	const [lang, setLang] = useState<Lang>(selectDefaultLang);

	const scrollToSection = (index: number) => {
		const yOffset = index * windowHeight;
		scrollViewRef.current?.scrollTo({ y: yOffset, animated: true });
		window.scrollTo(0, yOffset);
	};

	return (
		<>
			{/* <LangSelector value={lang} onValueChange={setLang} /> */}
			<LanguageContext.Provider value={lang}>
				<View style={styles.appbar}>
					{['Profile', 'Story', 'Languages', 'Skills', 'SideProject', 'ContactMe'].map((section, index) => (
						<TouchableOpacity
							key={index}
							onPress={() => scrollToSection(index)}
							style={styles.sectionButton}
						>
							<AppText style={{ color: 'black' }}>{section}</AppText>
						</TouchableOpacity>
					))}
				</View>

				<ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
					{[Profile, Story, Languages, Skills, SideProject, ContactMe].map((Content, index) => (
						<Page key={index}>
							<Content />
							{!index && <ScrollDownIndicator />}
						</Page>
					))}
				</ScrollView>
			</LanguageContext.Provider>
		</>
	);
}

export default App;

function selectDefaultLang(): Lang {
	const defaultLang = 'en';
	const browserLang = window.navigator.language?.split('-')[0];
	let lang = browserLang;
	if (!langs.includes(lang)) lang = defaultLang;
	return lang as Lang;
}

const styles = {
	appbar: {
		flexDirection: 'row',
		justifyContent: 'center',
		position: 'fixed',
		top: 0,
		backgroundColor: '#000000',
		left: 0,
		right: 0,
		zIndex: 1,
	},
	sectionButton: {
		
		backgroundColor: 'white',
		paddingVertical: 8,
		margin: 30,
		color: '#ddd',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#ddd',
		alignItems: 'center',
		minWidth: 100,
		flex: 1,
	},
} as const;
