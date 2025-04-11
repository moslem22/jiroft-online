import axios from "axios";

const DeleteCase = ({ref, item}) => {
  const deleteCategory = async () => {
      
    
    const response = await axios.postForm(
      "http://localhost:3000/api/admin/delete-category",{
            'id': ref.current.value,
      }
    );
    alert(response.data);
  };

  return (
    <>
      <input type="hidden" name="delete" value={item.id} ref={ref} />

      <button
        className="bg-pink-700 text-white rounded"
        type="button"
        onClick={deleteCategory}
      >
        delete
      </button>
    </>
  );
};

export default DeleteCase;
