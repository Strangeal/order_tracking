import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { BsHandbag } from "react-icons/bs";
type PopUpProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const PopUp = ({ visible, setVisible }: PopUpProps) => {
  return (
    <div className="card flex justify-content-center">
      <Dialog
        header="Header"
        visible={visible}
        // style={{ width: "50vw" }}
        className="dialog_card"
        onHide={() => setVisible(false)}
      >
        <div className="m-0">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            />
          </div>
          <ul className="grid grid-cols md:grid-cols-2 my-5 mx-auto">
            <li className="mb-3">
              <div className="flex items-center mb-3">
                <h4 className="text-sm font-bold mr-1">Order Number: </h4>
                <span className="text-xs"> 572490</span>
              </div>

              <div className="flex items-center">
                <h4 className="text-sm font-bold mr-1">Customer Name:</h4>
                <span className="text-xs"> John Doe</span>
              </div>
            </li>
            <li className="mb-3">
              <div className="flex items-center mb-3">
                <h4 className="text-sm font-bold mr-1">Product: </h4>
                {/* <BsHandbag className="h-5 w-5 font-medium mr-2" /> */}
                <span className="text-sm"> Apple</span>
              </div>

              <div className="flex items-center">
                <h4 className="text-sm font-bold mr-1">Status:</h4>
                <span className="text-xs bg-red-400 rounded px-2">
                  Delivered
                </span>
              </div>
            </li>
          </ul>
        </div>
      </Dialog>
    </div>
  );
};

export default PopUp;
