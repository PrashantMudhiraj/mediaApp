import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useDeleteAlbumMutation } from "../store";

function AlbumsListItems({ album }) {
    const [deleteAlbum, results] = useDeleteAlbumMutation();
    const handleDeleteAlbum = (album) => {
        deleteAlbum(album);
    };
    const header = (
        <div className="flex flex-row items-center justify-between">
            <Button onClick={() => handleDeleteAlbum(album)}>
                <GoTrashcan />
            </Button>
            <h1 className="mx-2">{album.title}</h1>
        </div>
    );
    return (
        <ExpandablePanel key={album.id} header={header}>
            {album.title}
        </ExpandablePanel>
    );
}

export default AlbumsListItems;
