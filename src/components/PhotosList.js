import { useFetchPhotosQuery, useAddPhotosMutation } from "../store";
import Button from "./Button";
import Shimmer from "./Shimmer";
import PhotosListItems from "./PhotosListItems";

const PhotosList = ({ album }) => {
    const { data, error, isFetching } = useFetchPhotosQuery(album);
    const [addPhoto, addPhotoResults] = useAddPhotosMutation();
    const handleAddPhoto = () => {
        addPhoto(album);
    };

    let content;
    if (isFetching) {
        content = <Shimmer times={3} className="h-10 w-full" />;
    } else if (error) {
        content = <div>{error.message}</div>;
    } else {
        content = data.map((photo) => (
            <PhotosListItems key={photo.id} photo={photo} />
        ));
    }
    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos in {album.title}</h3>
                <Button
                    onClick={handleAddPhoto}
                    loading={addPhotoResults.isLoading}
                >
                    Add Photo +
                </Button>
            </div>
            <div className="flex flex-row flex-wrap">{content}</div>
        </div>
    );
};

export default PhotosList;
