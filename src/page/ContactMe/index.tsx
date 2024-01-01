import { Image, Pressable, Text, View, Button } from "react-native";
import Card from "../../component/Card";
import { useSelectText } from "../../hook/useLang";
import { useState } from "react";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactMe() {
    const [showMore, setShowMore] = useState<boolean>(false);
    const [state, handleSubmit] = useForm("mdoqondr");
    if (state.succeeded) {
        return <Text style={styles.thanksText}>Thanks, the form was submitted successfully.</Text>;
    }
    return (
        <Card style={{ alignSelf: "center" }}>
            <form onSubmit={handleSubmit}>

                <View style={styles.formContainer}>
                    <Text style={styles.fancyForm}> Contact Me:</Text>
                    <Text style={styles.question}>
                        Got a question or proposal,{'\n'} 
                        or just want to say hello?{'\n'} Go ahead.

                    </Text>
                    <label htmlFor="email" placeholder="Enter your email" style={styles.label}>
                        Email Address
                    </label>
                    <input
                        style={styles.input}
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        style={styles.errorText}
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label style={styles.label}>
                        Message
                    </label>
                    <textarea
                        style={styles.input}
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        style={styles.errorText}
                    />
                    <button type="submit" style={styles.submitButton} disabled={state.submitting}>
                        Submit
                    </button>
                </View>

            </form>
        </Card>
    );
}

const styles = ({
    formContainer: {
        padding: 20,
    },
    label: {
        color: "white",
        fontSize: 16,
        marginBottom: 8
    },
    thanksText: {
        color: "white",
        fontSize: 40,
        marginBottom: 8
    },
    fancyForm: {
        color: 'rgb(153, 50, 204)',
        fontSize: '32px',
        marginBottom: '20px',
        textAlign: 'center',
    },
    question: {
        color: 'white',
        fontSize: '18px',
        marginBottom: '20px',
        textAlign: 'center',
    },

    input: {
        color: "black",
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 12,
        paddingLeft: 10,
    },
    textarea: {
        color: "black",
        height: 80,
        textAlignVertical: 'top',
        paddingTop: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
    },
    submitButton: {
        backgroundColor: 'rgb(153, 50, 204)',
        padding: 12,
        borderRadius: 8,
        marginTop: 32,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    successMessage: {
        color: '#4CAF50',
        fontSize: 18,
        textAlign: 'center',
    },
});




