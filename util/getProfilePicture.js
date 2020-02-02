import fetch from 'isomorphic-unfetch';

const getProfilePicture = async (username) => {
  try {
    const response = await fetch(`https://api.twitch.tv/helix/users?login=${username}`, {
      method: 'GET',
      headers: {
        'Client-ID': process.env.twitchId,
      },
    });
    const { data } = await response.json();


    const { profile_image_url: profileImage } = data[0];

    return profileImage;
  } catch (error) {
    console.error(error);
  }
};

export default getProfilePicture;
