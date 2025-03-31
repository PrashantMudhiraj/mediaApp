import { useFetchAlbumsQuery, useCreateAlbumMutation } from "../store";
import Shimmer from "./Shimmer";
import Button from "./Button";
import AlbumsListItems from "./AlbumsListItems";

const AlbumsList = ({ user }) => {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    // const result = useFetchAlbumsQuery(user);
    const [createAlbum, results] = useCreateAlbumMutation(user);

    const handleAddAlbum = () => {
        createAlbum(user);
    };

    // console.log(result);
    let content;
    if (isFetching) {
        content = <Shimmer times={3} className="h-10 w-full" />;
    } else if (error) {
        content = <div>{error.message}</div>;
    } else {
        content = data.map((album) => (
            <AlbumsListItems key={album.id} album={album} />
        ));
    }
    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold"> Albums for {user.name}</h3>
                <Button onClick={handleAddAlbum} loading={results.isLoading}>
                    + Add Album
                </Button>
            </div>
            <div>{content}</div>
        </div>
    );
};

export default AlbumsList;
