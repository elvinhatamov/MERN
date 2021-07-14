 import React from 'react';


 import Form from './components/Form/form';


import { Container , AppBar, Typography, Grow, Grid} from '@material-ui/core'

 const App =()=>{
     return(
         <Container maxWidth ='lg'>
             <AppBar position ='static' align ='inherit'>
                 <Typography variant ='h2' align ='center'>Elvin</Typography>
             </AppBar>
             <Grow in>
                 <Container>
                     <Grid container justify ='space-between'>
                         <Grid item xs ={12} sm ={7}>
                            
                     </Grid>
                     <Form />
                     </Grid>
                 </Container>
             </Grow>

         </Container>
     )

 }

 export default App;