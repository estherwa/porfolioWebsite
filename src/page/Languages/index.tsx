import { Image, Pressable, Text, View } from "react-native";
import Card from "../../component/Card";
import { useSelectText } from "../../hook/useLang";

import spanishFlag from "./spain.png"
import americanFlag from "./america.png"
import israelFlag from "./israel.png"
import frenchFlag from "./frenchFlag.png"
import { useState } from "react";
import AppText from "../../component/Text";

export default function Languages() {
    const [showMore, setShowMore] = useState<boolean>(false);
    const selectText = useSelectText();
    return (
        <Card style={{ justifyContent: 'space-evenly', paddingTop: 40 }}>
            <AppText style={{ fontSize: 25, letterSpacing: 1.1, textAlign: "center", marginBottom: 30, fontWeight: "bold" }}>
                {
                    selectText({
                        en: `Languages`,
                        fr: `Mes compétences`,
                    })
                }
            </AppText>

            <View style={{
                flexDirection: "row", flexWrap: "wrap", alignItems: "center",
                justifyContent: "center",
            }}>
                {
                    mapToTechRows(
                        [
                            {
                                logo: spanishFlag,
                                name: "SPANISH",
                                color: "#FFA000",
                            },
                            {
                                logo: americanFlag,
                                name: "ENGLISH",
                                color: "#FFA000",
                            },
                            {
                                logo: israelFlag,
                                name: "HEBREW",
                                color: "#FFA000",
                            },
                            {
                                logo: frenchFlag,
                                name: "FRENCH",
                                color: "#FFA000",
                            },

                        ]
                    )
                }

            </View>

        </Card>
    );
}

const mapToTechRows = (techs: Tech[]) => techs.map((tech, index) => <TechRow key={index} tech={tech} />);

function TechRow({ tech }: { tech: Tech }) {
    return (
        <View style={{
            flexBasis: 200, flexGrow: 1, flexDirection: "row", alignItems: "center",
            justifyContent: "center",margin: 40
        }}>
            <Image source={{ uri: tech.logo }}
                resizeMode="contain"
                style={{ width: 50, height: 50, margin: 20 }} />
            <AppText style={{ fontSize: 18, letterSpacing: 1.1, color: tech.color, fontWeight: "bold" }}>
                {tech.name}
            </AppText>
        </View>
    );
}

interface Tech {
    logo: string;
    name: string;
    color: string;
}