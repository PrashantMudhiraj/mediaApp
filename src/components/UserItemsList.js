import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";

const UserItemsList = ({ user }) => {
    const [doRemoveUser, isDeletingUser, DeletingUserError] =
        useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    };
    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className="flex flex-row items-center justify-between">
                    <Button
                        loading={isDeletingUser}
                        onClick={handleClick}
                        className="mr-3  cursor-pointer"
                    >
                        <GoTrashcan />
                    </Button>
                    {DeletingUserError && "Error while deleting data"}
                    {user.name}
                </div>
            </div>
        </div>
    );
};

export default UserItemsList;
