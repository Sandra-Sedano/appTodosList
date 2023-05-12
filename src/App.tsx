import { Theme } from "./theme/Theme"
import { AppBar, Badge, Button, colors, Divider, Grid, TextField, Toolbar, Typography, useTheme } from "@mui/material";
import { Container, spacing } from "@mui/system";
import { PlusCircle, Rocket, ClipboardText, TextAlignJustify } from "phosphor-react";
import { grey } from '@mui/material/colors';
import { useEffect, useState } from 'react';

function App() {
  const tema = useTheme()
  const [tasks, setTasks] = useState<Task[]>()
  useEffect(()=>{

  },[])
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
              top: '-27px',
             justifyContent: 'center'
            }}>
              <Grid item xl={10} sm={10} xs={7}>
                <TextField variant="outlined" name="task" fullWidth sx={{
                  backgroundColor: colors.grey[800]
                }} />
              </Grid>
              <Grid item xl={2} sm={2} xs={2}>
                <Button variant="contained" fullWidth sx={{
                  heigh: '100%'
                }}> <span> Criar</span>   <PlusCircle size={32} /></Button>
              </Grid>
            </Grid>

            <Grid container spacing={tema.spacing(5)}>

              <Grid item xl={12} xs={12} sm={12} sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>

                <Typography variant="caption">
                  <Badge color='primary' badgeContent={0} showZero> Tarefas Criadas</Badge>
                </Typography>
                <Typography variant="caption">
                  <Badge color='primary' badgeContent={0} showZero> Concluidas</Badge>
                </Typography>

              </Grid>

            </Grid>

            <Divider />

            <Grid container sx={{
              textAlign: 'center',
              alignItems: 'center',
              padding: '50px',

            }}>
              <Grid xl={12} xs={12}>
                <ClipboardText size={50} />
                <Typography sx={{
                  color: colors.grey[100],
                  fontSize: '200%'

                }}>
                  Você ainda não tem tarefas cadastradas
                </Typography>

                <Typography sx={{
                  color: colors.grey[500],
                  fontSize: '150%'
                }}>
                  Crie tarefas e organize seus itens a fazer
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
