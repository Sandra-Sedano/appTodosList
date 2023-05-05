import { Theme } from "./theme/Theme"
import { AppBar, Badge, Button, colors, Grid, TextField, Toolbar, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import { PlusCircle, Rocket } from "phosphor-react";

function App() {
  const tema = useTheme()
  return (
    <>
      <Theme>
        <AppBar position="static">
          <Toolbar sx={{
            paddingTop: tema.spacing(2),
            paddingBottom: tema.spacing(2),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '@media all': {
              minHeight: "200px"
            }
          }}>
            <Typography variant="h5" component="h1" sx={{
              display: 'flex',
              alignitems: 'center',
              gap: tema.palette.primary.light
            }}>
              <Rocket size={32} /> Lista de Tarefa</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Container sx={{
            position: 'relative',
            paddingTop: '50px'
          }}>
            <Grid container spacing={tema.spacing(0.5)} sx={{
              position: 'absolute',
              top: '-30px'
            }}>
              <Grid item xl={8} sm={10}>
                <TextField variant="outlined" name="task" fullWidth sx={{
                  backgroundColor: colors.grey[800]
                }} />
              </Grid>
              <Grid item xl={4} sm={2} xs={2}>
                <Button variant="contained" fullWidth sx={{
                  heigh: '100%'
                }}> <span> Criar</span>   <PlusCircle size={32} /></Button>
              </Grid>
            </Grid>
            <Grid container spacing={tema.spacing(1)}>
              <Grid item>
                <Typography variant="caption" sx={{
                  display:'flex',
                  alignItems:'center',
                  gap:tema.spacing(1)

                }}>
                 <Badge color='primary' badgeContent={0} showZero> Tarefas Criadas</Badge>  

                </Typography>

              </Grid>
            </Grid>
          </Container>
        </main>
      </Theme>
    </>
  )
}

export default App
