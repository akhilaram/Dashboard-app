import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { DASHBOARD_LIST } from '../../grapghql/constants';
import { Modal } from '../../components/modal';
import { CharactersObj } from '../../interfaceTypes';

export default function Dashboard() {
    const { loading, data } = useQuery(DASHBOARD_LIST);
    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState(-1);
    const dashboardData = data && data.characters.results;
    const modalDataList = modalData !== -1 && dashboardData[modalData];
    const showModal = (id: number) => {
        setModalShow(true);
        setModalData(id);
    }
    const hideModal = () => {
        setModalShow(false);
    }
    return (
        <div className='dashboardContainer'>
            <h3 className="dashboard-header">Available Characters</h3>
            <Modal header="More Information:" show={modalShow} handleClose={hideModal}>
                <table className='modal-table'>
                    {modalDataList && <tbody>
                        <tr>
                            <td> <b>status:  </b> {modalDataList.status === "" ? 'Nan' : modalDataList.status}</td>
                        </tr>
                        <tr>
                            <td> <b>species:  </b> {modalDataList.species === "" ? 'Nan' : modalDataList.species}</td>
                        </tr>
                        <tr>
                            <td> <b>type:  </b> {modalDataList.type === "" ? 'Nan' : modalDataList.type}</td>
                        </tr>
                    </tbody>}
                </table>
            </Modal>
            {
                loading ? (
                    <p>Loading ...</p>
                ) : (
                    <table className='dashboardContainer-table'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dashboardData && dashboardData.map((char: CharactersObj, i: number) => (
                                <tr key={` ${char.name} + - + ${i}`} onClick={() => showModal(i)}>
                                    <td>{char.id}</td>
                                    <td>{char.name}</td>
                                    <td>{char.gender}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </div >
    );
}