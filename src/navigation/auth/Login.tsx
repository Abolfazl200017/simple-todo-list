import { Card, TextField, Button } from "@mui/material"

    
function Login() {

    return <div className="w-full min-h-screen flex justify-center items-center">
        <Card sx={{
          minWidth: 275,
        }}>
          <form className="p-10">
            <TextField id="username" label="نام کاربری" variant="outlined" sx={{ width: '100%', direction: 'ltr' }}/>
            <TextField id="password" label="رمز عبور" variant="outlined" type="password" sx={{ marginTop: '2rem', width: '100%', direction: 'ltr' }} />

            <input className="w-0 h-0 overflow-hidden" type="submit" />
            <Button variant="contained" sx={{ fontWeight: 'bold', marginTop: '2rem' }}>ورود</Button>
          </form>
        </Card>
    </div>
}

export default Login