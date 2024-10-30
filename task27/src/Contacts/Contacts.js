function Contacts() {
    const contactsInfo = { phone: "123-456-7890", email: "example@example.com" };
  
    return (
      <div className="container my-5 p-4 bg-light rounded shadow">
        <h2 className="text-center mb-4">Contacts Page</h2>
        <div className="text-center">
          <p className="mb-2"><strong>Phone:</strong> {contactsInfo.phone}</p>
          <p><strong>Email:</strong> {contactsInfo.email}</p>
        </div>
      </div>
    );
}

export default Contacts;