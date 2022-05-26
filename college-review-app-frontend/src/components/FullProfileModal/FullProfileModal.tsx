import { useEffect, useState } from 'react';

// Material UI
import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// CSS Import
import './FullProfileModal.css';

// This component represents a a full profile modal that shows the complete
// statistics, background, extracirriculars, and advice of an anonymous applicant.

const FullProfileModal = ({
  refresh,
  open,
}: {
  refresh: boolean;
  open: boolean;
}) => {

  // State for closing and opening modal
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setModalOpen(open);
  }, [refresh]);

  // Handles closing the modal   
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <div className="fullProfileModalContainer">
        <div className="fullProfileHeaderModalContainer">
          <p>Accepted : Class of 2025</p>
          <CloseIcon
            style={{ cursor: 'pointer' }}
            onClick={() => handleClose()}
            fontSize="medium"
          />
        </div>
        <p>Intended Major: Computer Science</p>
        <div className="fullProfileBodyContainer">
          <div className="fullProfileLeftColumn">
            <div className="fullProfileStats">
              <h4>GPA and Test Scores</h4>
              <p>GPA: 3.73</p>
              <p>SAT: 1540</p>
              <p>ACT: N/A</p>
            </div>
            <div className="fullProfileBackgroundInfo">
              <h4>Background</h4>
              <p>State: Washington</p>
              <p>Country: USA</p>
              <p>Ethnicity: Hispanic</p>
              <p>Gender: Male</p>
              <p>First Gen: Yes</p>
              <p>Family Income: 200k+ </p>
              <p>Legacy: Yes</p>
            </div>
          </div>

          <div className="fullProfileRightColumn">
            <div className="fullProfileExtraCirriculars">
              <h4>Extracirriculars</h4>
              <p>1. Honor Society</p>
              <p>2. President of Future Buisness Leaders of America (FBLA)</p>
              <p>3. Software Engineering Internship at ChartHop</p>
              <p>4. Varsity Soccer - Team Captain</p>
              <p>5. Top Board - Chess Club</p>
            </div>
            <div className="fullProfileAdvice">
              <h4>Advice</h4>
              <p>
                Lorem ipsum dolor sit amet, harum conceptam sed in, te omnis
                detracto per, eos enim dissentiunt efficiantur ut. Ad nam etiam
                possim definitionem, novum ignota salutandi vix in. Ne summo.

                Lorem ipsum dolor sit amet, harum conceptam sed in, te omnis
                detracto per, eos enim dissentiunt efficiantur ut. Ad nam etiam
                possim definitionem, novum ignota salutandi vix in. Ne summo.
                
                Lorem ipsum dolor sit amet, harum conceptam sed in, te omnis
                detracto per, eos enim dissentiunt efficiantur ut. Ad nam etiam
                possim definitionem, novum ignota salutandi vix in. Ne summo.
              </p>
            </div>
          </div>
          {/* Scores + Gpa */}
          {/* Background Info */}
          {/* Extracirriculars */}
          {/* Advice */}
          {/* Date Added */}
        </div>
        <div className="fullProfileDateAddedText">Date Added: March 8th 2022</div>
      </div>
    </Modal>
  );
};

export default FullProfileModal;
