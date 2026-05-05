import './App.css'
import Button from './components/Button'
import styles from './App.module.scss'
import Modal from './components/Modal/index.js';
import { AiOutlineSelect } from 'react-icons/ai'
import { useState } from 'react';

function App() {
  const [modals, setModals] = useState({
    simpleOpen: false,
  });

  return (
    <div className={styles.container}>
    <h2>Buttons</h2>
      <div className={styles.section}>
                <div className={styles.singleButton}>
                    <Button onClick={console.log('Clicked')} text="Primary" />
                </div>
                <div className={styles.singleButton}>
                    <Button
                        onClick={() => console.log('Clicked')}
                        text="Secondary"
                        variant="secondary"
                    />
                </div>
                <div className={styles.singleButton}>
                    <Button
                        onClick={() => console.log('Clicked')}
                        text="Disabled"
                        isDisabled={true}
                    />
                </div>
                <div className={styles.singleButton}>
                    <Button
                        onClick={() => console.log('Clicked')}
                        text="Text"
                        isLoading={true}
                    />
                </div>
                <div className={styles.singleButton}>
                    <Button
                        onClick={() => console.log('Clicked')}
                        text="Normal"
                        isLoading={true}
                        loadingText="Loading"
                    />
                </div>
                <div className={`${styles.singleButton} ${styles.block}`}>
                    <Button
                        onClick={() => console.log('Clicked')}
                        text="Block"
                        variant="secondary"
                        block={true}
                    />
                </div>
                <div className={styles.singleButton}>
                    <Button
                        onClick={() => console.log('Clicked')}
                        text="Icon"
                        variant="secondary"
                        icon={AiOutlineSelect}
                    />
                </div>
                <div className={styles.singleButton}>
                    <Button
                        onClick={() => console.log('Clicked')}
                        text="Icon left"
                        iconPosition="left"
                        variant="secondary"
                        icon={AiOutlineSelect}
                    />
                </div>
                <div className={styles.singleButton}>
                    <Button
                        onClick={() => console.log('Clicked')}
                        text="Small"
                        icon={AiOutlineSelect}
                        size="sm"
                        variant="secondary"
                    />
                </div>
                <div className={styles.singleButton}>
                    <Button
                        onClick={() => console.log('Clicked')}
                        text="Default"
                        icon={AiOutlineSelect}
                        variant="secondary"
                    />
                </div>
                <div className={styles.singleButton}>
                    <Button
                        onClick={() => console.log('Clicked')}
                        text="Large"
                        icon={AiOutlineSelect}
                        size="lg"
                        variant="secondary"
                    />
                </div>
                <div className={styles.singleButton}>
                    <Button
                        onClick={() => console.log('Clicked')}
                        text="Test"
                        variant="secondary"
                        icon={AiOutlineSelect}
                        size="sm"
                        onlyIcon={true}
                    />
                </div>
                <div className={styles.singleButton}>
                    <Button
                        onClick={() => console.log('Clicked')}
                        text="Test"
                        variant="secondary"
                        icon={AiOutlineSelect}
                        onlyIcon={true}
                    />
                </div>
                <div className={styles.singleButton}>
                    <Button
                        onClick={() => console.log('Clicked')}
                        text="Test"
                        variant="secondary"
                        icon={AiOutlineSelect}
                        size="lg"
                        onlyIcon={true}
                    />
                </div>
            </div>

      <div className={styles.section}>
        <button type="button" onClick={() => setModals({ ...modals, simpleOpen: true })}>Open modal</button>
        <Modal
          dismissible={false}
          isOpen={modals.simpleOpen}
          onClose={() => setModals({ ...modals, simpleOpen: false })}
        >
          <h2>Modal</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus in ipsa laboriosam sequi? Ab at dignissimos fugiat iusto laudantium maiores, modi molestias provident quibusdam quo, saepe soluta tempore totam voluptatum?</p>
          <div>
            <button type="button">Close</button>
            <button type="button">Ok</button>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default App
