import { GoTrashcan } from "react-icons/go";
import { useDeletePhotoMutation } from "../store";

const PhotosListItems = ({ photo }) => {
    const [removePhoto] = useDeletePhotoMutation();

    const handleRemovePhoto = (photo) => {
        removePhoto(photo);
    };
    return (
        <div className="m-1 relative" onClick={() => handleRemovePhoto(photo)}>
            <img src={photo.url} className="h-20 w-20" alt="random photo" />
            <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
                <GoTrashcan className="text-3xl" />
            </div>
        </div>
    );
};

export default PhotosListItems;
