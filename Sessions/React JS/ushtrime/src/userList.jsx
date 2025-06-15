export const UserList = ({ names }) => (
    <>
        <h1>User List</h1>
        {names.map((name) => <p key={name}>{name}</p>)}
    </>
);