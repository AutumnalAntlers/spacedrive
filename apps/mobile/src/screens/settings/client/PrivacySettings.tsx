import React from 'react';
import { Text, View } from 'react-native';
import ScreenContainer from '~/components/layout/ScreenContainer';
import { tw } from '~/lib/tailwind';

const PrivacySettingsScreen = () => {
	return (
		<ScreenContainer scrollview={false} style={tw`px-7`}>
			<Text style={tw`text-ink`}>TODO</Text>
		</ScreenContainer>
	);
};

export default PrivacySettingsScreen;
