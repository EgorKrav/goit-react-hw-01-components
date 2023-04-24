const createColor = () => {
  const color =
    'rgba(' + Math.round(Math.random() * 255) +',' +
              Math.round(Math.random() * 255) +',' +
              Math.round(Math.random() * 255) +',' + 0.2 + ')';
  return color;
};

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
              <tr srtyle={{ backgroundColor: createColor() }}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
