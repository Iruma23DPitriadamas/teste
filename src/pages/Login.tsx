import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponent } from './components'

function Login() {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
        >
          <FormComponent
            inputs={[
              { type: 'email', placeholder: 'email' },
              { type: 'password', placeholder: 'Senha' },
            ]}
            buttons={[
              { className: 'primary', type: 'submit', children: 'Login' },
            ]}
          />

          <Container maxWidth="sm">
            <LoginArea>LOGIN</LoginArea>
          </Container>
        </Grid>

        <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <BannerImage />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login
