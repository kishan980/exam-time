import React, { useState } from 'react';

const SimpleForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [submittedData, setSubmittedData] = useState([]);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(prev => [...prev, formData]);
        setFormData({ name: '', email: '' });
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Simple Form</h2>
            <div className="row">
                {/* Left Side: Form */}
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="form-control mb-2"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="form-control mb-2"
                                required
                            />
                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>

                {/* Right Side: Submitted Data Table */}
                <div className="col-md-6">
                    {submittedData.length > 0 && (
                        <div>
                            <h5>Submitted Entries:</h5>
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {submittedData.map((entry, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{entry.name}</td>
                                            <td>{entry.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SimpleForm;
