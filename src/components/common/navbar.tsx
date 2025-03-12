function Navbar() {
        const styles = {
          header: {
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
            backgroundColor: 'black',
            color: 'white',
          },
          input: {
            marginLeft: '16px',
            padding: '8px',
            borderRadius: '8px',
            backgroundColor: '#4a4a4a',
            color: 'white',
          },
          button: {
            marginLeft: '8px',
            padding: '8px 16px',
            borderRadius: '8px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          },
          buttonHover: {
            backgroundColor: '#0056b3',
          },
        };
      
        return (
          <header style={styles.header}>
            <div className="flex items-center">
              <div className="flex items-center">
                <img style={{width: "80px"}} src="../../public/images/logo.png" alt="Logo" className="mr-2" />
                <h1 className="text-lg font-bold">GamesTop</h1>
              </div>
              <input type="text" placeholder="Buscar" style={styles.input} />
            </div>
            <div className="flex items-center">
              <button style={styles.button}>Iniciar sesión</button>
              <button style={styles.button}>...</button>
            </div>
          </header>
        );
      }


export default Navbar; 