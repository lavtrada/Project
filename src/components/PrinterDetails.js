import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PrinterDetails() {
  let params = useParams();
  const navigate = useNavigate();

  const [printer, setprinter] = useState({});

  useEffect(() => {
    fetch(
      "https://6320a5329f82827dcf316a50.mockapi.io/Printer" +"/"+ params.id,
      {
        method: "GET"
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setprinter(res);
      });
  }, []);
   
   
  return (
    <>
      <table>
        <tr>
          <td>Name</td>
          <td>{printer.PrinterName}</td>
        </tr>

        <tr>
          <td>Image</td>
          <td>
            <img src={printer.PrinterImage} />
          </td>
        </tr>
        <tr>


          <td>Price</td>
          <td >{printer.PrinterPrice}</td>
        </tr>
        <tr>


          <td>Description</td>
          <td>
          {printer.PrinterDescription } 
          </td>
        </tr>
        <tr>
          <td>Category</td>
          <td>
            {printer.PrinterModel}  
          </td>
        </tr>
        <tr>
          <td>Maker</td>
          <td>
            {printer.PrinterMaker}  
          </td>
        </tr>

        <tr>
          <td>
            <button
              onClick={() => {
                fetch(
                  "https://6320a5329f82827dcf316a50.mockapi.io/Printer/" +
                    params.id,
                  {
                    method: "DELETE"
                  }
                ).then((res) => {
                  navigate("/Printers");
                });
              }}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                navigate("/printer/add/" + params.id);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}
export default PrinterDetails;
