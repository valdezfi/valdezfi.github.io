import '../Swap.css';

function UpcomingProjects() {
    return (
        <div className="col-lg-5 p-4 mission-box mission-radius mission-border">
            <div className="row">
                <h3 className="text-left">Upcoming projects</h3>
            </div>
            <hr />
            <div className="row">
                <div className="col-4">
                    <img
                        src="images/Group 36697.png"
                        className="lathe-images-small"
                    />
                </div>
                <div className="col">
                    <div className="row">
                        <h4>
                            <b>LATHE</b>
                        </h4>
                    </div>
                    <div className="row">
                        <p className="lathe-special-text">-IMAGEXA</p>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <p>
                    Lathe is running on MEGAFI network, inspired by a Imagexa
                    product. Lathes that are used in modern industry to save time
                    and improve work precision, since CNC centers are very useful
                    for complex machining.
                </p>
            </div>
            <hr />
            <div className="row">
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">NAME</p>
                            </th>
                            <td>
                                <b>Lathe</b>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">SYMBOL</p>
                            </th>
                            <td>
                                <b>LTHE</b>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">DECIMALS</p>
                            </th>
                            <td>
                                <b>18</b>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">ADDRESS</p>
                            </th>
                            <td>
                                <b>TBA</b>
                            </td>
                        </tr>
                        <tr style={{ borderBottom: "solid thin #1a1a1a" }}>
                            <th scope="row">
                                <p className="lathe-special-text">TOTAL SUPPLY</p>
                            </th>
                            <td>
                                <b>0</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UpcomingProjects;
