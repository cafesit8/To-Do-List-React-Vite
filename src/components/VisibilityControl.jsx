export const VisibilityControl = ({ isCheked, setShowCompleted, cleanTask}) => {

    function handleDelete(){
        if(window.confirm('Are you sure?')){
            cleanTask()
        }
    }

  return (
    <>
      <div className="mt-5 bg-blue-900 py-3">
        <div className="flex justify-center items-center">
            <label>Show Task Done</label>
            <input
            className="ml-3 cursor-pointer"
              type="checkbox"
              checked={isCheked}
              onChange={(e) => setShowCompleted(e.target.checked)}
            />
        </div>
        <button className="py-1 px-4 rounded-lg bg-fuchsia-700 mt-2" onClick={handleDelete}>
            Clear
        </button>
      </div>
    </>
  );
};
