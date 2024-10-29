import { AccountCircle } from "@mui/icons-material"
import { Card, TextField, Button } from "@mui/material"

    
function Login() {

    return <div className="w-full min-h-screen flex justify-center items-center p-5">
        <Card sx={{
          minWidth: 275,
          padding: '2rem',
        }}>
          <div className="text-secondary">
            <AccountCircle sx={{ width: 100, height: 100}} />
          </div>
          <form>
            <TextField id="username" label="نام کاربری" variant="outlined" sx={{ marginTop: '2rem', width: '100%', direction: 'ltr' }}/>
            <TextField id="password" label="رمز عبور" variant="outlined" type="password" sx={{ marginTop: '2rem', width: '100%', direction: 'ltr' }} />

            <input className="w-0 h-0 overflow-hidden" type="submit" />
            <Button variant="contained" sx={{ fontWeight: 'bold', marginTop: '2rem' }}>ورود</Button>
          </form>
        </Card>
    </div>
}

export default Login