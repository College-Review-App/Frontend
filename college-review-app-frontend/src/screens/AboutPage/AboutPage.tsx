import { useState } from 'react'
import AddReviewModal from '../../components/AddReviewModal/AddReviewModal'

function AboutPage() {

  const [refresh, setRefresh] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <AddReviewModal refresh={refresh} open={modalOpen}/>
      <p>About Page</p>
      <p onClick={() => {setRefresh(!refresh); setModalOpen(true)}}>Open Modal </p>
    </div>
  )
}

export default AboutPage