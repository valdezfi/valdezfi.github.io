import '../Lathe.css';


function PoolInformation() {
    return (
        <div class="container-fluid ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12  mb-5">
                        <div class="row  d-flex justify-content-between d-grid ">
                            <div class="col-lg-5 mb-1 p-4  mission-box mission-radius mission-border">
                                <h3 class="mb-3">Pool Information</h3>
                                <table class="table">

                                    <tbody>
                                        <tr>
                                            <th scope="row"><p class="lathe-special-text">TOKEN DISTRIBUTION</p></th>
                                            <td><b>Date UTC</b></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><p class="lathe-special-text">MIN. ALLOCATION</p></th>
                                            <td><b>0.01 MFI</b></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><p class="lathe-special-text">MAX. ALLOCATION</p></th>
                                            <td><b>TBA</b></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><p class="lathe-special-text">TOKEN PRICE</p></th>
                                            <td><b>TBA</b></td>
                                        </tr>
                                        <tr style="border-bottom:solid thin #1a1a1a">
                                            <th scope="row"><p class="lathe-special-text">ACCESS TYPE</p></th>
                                            <td><b>Public</b></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div class="col-lg-5 p-4 mt-1  mission-box mission-radius mission-border">
                                <h3 class="mb-3">Token Information</h3>
                                <table class="table">

                                    <tbody>
                                        <tr>
                                            <th scope="row"><p class="lathe-special-text">NAME</p></th>
                                            <td><b>Lathe</b></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><p class="lathe-special-text">SYMBOL</p></th>
                                            <td><b>LTHE</b></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><p class="lathe-special-text">DECIMALS</p></th>
                                            <td><b>18</b></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><p class="lathe-special-text">ADDRESS</p></th>
                                            <td><b>TBA</b></td>
                                        </tr>
                                        <tr style="border-bottom:solid thin #1a1a1a">
                                            <th scope="row"><p class="lathe-special-text">TOTAL SUPPLY</p></th>
                                            <td><b>0</b></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PoolInformation;
