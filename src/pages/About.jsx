import React from 'react'
import {Box, Button, Typography} from '@mui/material'

const About = () => {
  return (
    <> 
    <Box bgcolor={'#ccaabb'} py={'50px'}>
      <Typography variant='h3' align='center' sx={{textDecoration: 'underline'}} color='primary.light'>
      Hello
      </Typography>
      
      <Box display={'flex'} p={10} bgcolor={'skyblue'} width={'80%'} margin={'auto'} alignItems={"center "}>
        <Box width={'60%'}>
          <Typography variant='h3' marginBottom={2}>
            Border Hero With Cropped image and shadows
          </Typography>
          <Typography variant='body2' paddingRight={10} marginBottom={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis iure sit nemo sapiente possimus dolor consequatur explicabo molestiae doloribus! Officiis, nam aliquid fuga magnam autem nesciunt molestiae ad eius! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores autem aut perferendis amet consectetur accusantium eius minus? Quo fugit saepe, doloribus earum error ipsa nobis obcaecati laboriosam ut esse qui sunt, animi magnam cumque voluptatibus nisi neque doloremque minus in voluptates laborum distinctio, et corporis! Suscipit doloremque sunt hic excepturi.
          </Typography>
          <Button variant='outlined' color='success' sx={{marginRight:'5px'}}>Primary</Button>
          <Button variant='contained' bgcolor='Blue'>Default</Button>
        </Box>
        <Box width={'50%'} className='bg-blue-200'> 
          <img src="4.png" alt="" />
        </Box>
      </Box>
      </Box>
    </>
  )
}

export default About
