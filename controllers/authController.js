const supabaseAdmin = require('../supabaseClient');
const {createClient} = require('@supabase/supabase-js');

const supaAnonClient = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

exports.registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { data, error } = await supabaseAdmin.auth.admin.createUser({
            email,
            password,
            email_confirm: true,
        });

        if (error) {
            console.error('Error al crear el usuario:', error);
            return res.status(400).json({ error: error.message });
        }

        return res.status(201).json({ message: 'Usuario creado exitosamente', user: data });
    } catch (error) {
        console.error('Error en el registro del usuario:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }


}
exports.loginUser = async (req, res) => {
    const {email, password} = req.body;
    const {data, error} = await supaAnonClient.auth.signInWithPassword({
        email,
        password,
    });
    if (error) return res.status(401).json({ error: error.message });
    res.json({session: data.session, user:data.user});
    
    
    /*
    const { email, password } = req.body;

    try {
        const { data, error } = await supaAnonClient.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error('Error al iniciar sesión:', error);
            return res.status(401).json({ error: error.message });
        }

        return res.status(200).json({ message: 'Inicio de sesión exitoso', session: data });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }*/
}