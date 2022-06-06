import "./__totalamount.scss";

const TotalAmount = () => {
  return (
    <>
      <table className="total-amount">
        <thead>
          <tr>
            <td
              className="text-left"
              style={{
                width: "30%",
              }}
            >
              Product Name
            </td>
            <td
              className="text-right"
              style={{
                width: "10%",
              }}
            >
              Quantity
            </td>
            <td
              className="text-right"
              style={{
                width: "10%",
              }}
            >
              Unit Price
            </td>
            <td
              className="text-right"
              style={{
                width: "20%",
              }}
            >
              Total
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left">
              <a href=" ">Khăn Giấy Lụa Vinatissue 280 Tờ</a>
            </td>
            <td className="text-right">4</td>
            <td className="text-right">21,000₫</td>
            <td className="text-right">84,000₫</td>
          </tr>
          <tr>
            <td className="text-left">
              <a href=" ">Nước Ngọt Coca Cola Zero Lon 320Ml</a>
            </td>
            <td className="text-right">1</td>
            <td className="text-right">8,500₫</td>
            <td className="text-right">8,500₫</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="text-right">
              <strong>Total amount:</strong>
            </td>
            <td className="text-right">92,500₫</td>
          </tr>
          <tr>
            <td colSpan={3} className="text-right">
              <i className="fa-solid fa-plus"></i>
              <strong>Shipping Fee:</strong>
            </td>
            <td className="text-right">12,000₫</td>
          </tr>
          <tr>
            <td colSpan={3} className="text-right">
              <strong>Used Membership Points:</strong>
            </td>
            <td className="text-right">0₫</td>
          </tr>
          <tr>
            <td colSpan={3} className="text-right">
              <strong>Total (VAT):</strong>
            </td>
            <td className="text-right">104,500₫</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default TotalAmount;
