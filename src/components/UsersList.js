import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Shimmer from "./Shimmer";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import UserItemsList from "./UserItemsList";

function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] =
        useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
    const { data } = useSelector((state) => state.users);

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleAddUser = () => {
        doCreateUser();
    };

    let content;
    if (isLoadingUsers)
        content = <Shimmer times={10} className="h-10 w-full" />;
    else if (loadingUsersError)
        content = (
            <h1 className="text-2xl font-bold text-red-400">
                Error while fetching users....
            </h1>
        );
    else
        content = data.map((user) => {
            return <UserItemsList key={user.id} user={user} />;
        });
    return (
        <div>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="text-2xl">Users </h1>

                <Button onClick={handleAddUser} loading={isCreatingUser}>
                    + Add User
                </Button>

                {creatingUserError && "Error while creating user"}
            </div>
            {content}
        </div>
    );
}

export default UsersList;
