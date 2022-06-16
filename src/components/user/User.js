import './User.css'

const User = (props) => {
    const { id, name,username, email, city } = props;
    return (
        <div className={'styleUser'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>city: {city}</div>
        </div>
    );
};

export default User;
