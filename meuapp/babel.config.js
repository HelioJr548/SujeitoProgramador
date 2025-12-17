module.exports = function (api) {
	api.cache(true);

	return {
		presets: ['babel-preset-expo'],
		plugins: [
			['react-native-worklets/plugin'],
			// Add other plugins here, Reanimated last if use
		],
	};
};
