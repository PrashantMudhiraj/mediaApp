import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UserItemsList = ({ user }) => {
    const [doRemoveUser, isDeletingUser, DeletingUserError] =
        useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    };

    const header = (
        <>
            <Button
                loading={isDeletingUser}
                onClick={handleClick}
                className="mr-3  cursor-pointer"
            >
                <GoTrashcan />
            </Button>
            {DeletingUserError && "Error while deleting User"}
            {user.name}
        </>
    );
    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel>
    );
};

export default UserItemsList;
