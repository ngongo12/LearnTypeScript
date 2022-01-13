import apiURL from "./apiURL";

export const login = (phone: string, password: string) => {
    const loginUrl = apiURL+'users/login';
    console.log('>>>>>>>>>>>>>>>>>login Url',loginUrl);
    const data = { user: { phone, password } };
    console.log(`loginAPI ${phone}  ${password}`);
    return fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.log(e));
}

export const editProfiles = ( user: any ) =>{
    const editUrl = apiURL + 'users/editProfile';
    return fetch(editUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user })
    })
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.log(e));
}

export const addFavorite = ( productId: string, user: any) => {
    let favorites: any;
    if(user?.favorites){
        favorites.push(productId);
    }
    else{
        favorites = [productId];
    }

    return editProfiles({
        _id: user._id,
        favorites
    })
}

export const changePassword = (user: any) => {
    return fetch(`${apiURL}users/changePassword`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user })
    })
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.log(e));
}

export const getShopName = (id: string) => {
    return fetch(`${apiURL}users/getShopName?id=${id}`)
        .then(res => res.json())
        .then(res => {
            if(res?.shopName){
                return res?.shopName;
            }
            return res?.fullname;
        })
        .catch(e => 'undefine');
}

export const getShopByID = (id: string) => {
    return fetch(`${apiURL}users/getShopByID?id=${id}`)
        .then(res => res.json())
        .then(res => res)
        .catch(e => 'undefine');
}

export const getUserByID = (id: string) => {
    return fetch(`${apiURL}users/getUserByID?id=${id}`)
        .then(res => res.json())
        .then(res => res)
        .catch(e => 'undefine');
}

export const register = ( user: any ) => {
    const registerUrl = `${apiURL}users/register`;
    return fetch(registerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user })
    })
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.log(e));
}

export const getShopInfo = (id: string) => {
    return fetch(`${apiURL}users/getShopInfo?id=${id}`)
        .then(res => res.json())
        .then(res => res)
        .catch(e => 'undefine');
}

export const userURL = `${apiURL}users/`;

export default {
    login,
    editProfiles,
    register,
    getShopName,
    addFavorite,
    getUserByID,
    changePassword,
    getShopInfo,
    userURL
};