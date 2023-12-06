import { Image, Text, View } from "react-native";
import Card from "../../component/Card";
import AppText from "../../component/Text";
import { useSelectText } from "../../hook/useLang";
import shopinzonAppPicture from "./shopinzon-app.jpeg"

export default function Story() {
	const selectText = useSelectText();
	return (
		<Card style={{ overflow: "hidden", flexDirection: "row", padding: 0, flexWrap: "wrap" }}>
			{/* <Image source={{ uri: shopinzonAppPicture }} resizeMode="cover" style={{ minWidth: 200, flexGrow: 1, minHeight: 200 }} /> */}

			<View style={{ padding: 20, flexBasis: 200, justifyContent: 'space-evenly', flexGrow: 1 }}>

				<AppText style={{ fontSize: 20, letterSpacing: 1.1, fontWeight: "bold", marginBottom: 30}}>
					{
						selectText({
							en: `My curriculum`,
							fr: `Mon cursus`,
						})
					}
				</AppText>

				<AppText style={{ fontSize: 18, letterSpacing: 1.1 }}>
					{
						selectText({
							en: `With many years of work experience, I have taken part on various projects, including developing e-commerce Luxury platform including LVMH, social networks, and real-time communication applications. Through these projects, I have gained expertise in a range of technologies, including JavaScript, React, Node.js, Express.js, MongoDB, SQL, AWS, and more.`
								+ <br />
								+ `My proficiency in front-end technologies, including HTML, angular ,React, Redux, CSS, and JavaScript/ typescript enables me to create visually appealing and responsive web interfaces that provide a seamless user experience. In addition, my knowledge of back-end technologies such as Node.js, Express.js, MongoDB`
								+ <br />
								+ `, and SQL enables me to build reliable and secure server-side applications that are capable of handling high traffic volumes.`
								+ <br />
							+`As a Full Stack Developer, I am committed to staying up-to-date with the latest industry trends and advancements. I have a track record of continuously improving my skills and knowledge by attending conferences, participating in online communities, and engaging in self-directed learning. This dedication to growth enables me to deliver high-quality, scalable, and maintainable solutions that meet the unique needs of each client.`
						
							+`Overall, I am excited about the opportunities to leverage my skills and expertise to drive innovation, growth, and success for my clients.`,
							fr: ""
						})
					}
				</AppText>
			</View>
		</Card>
	);
}