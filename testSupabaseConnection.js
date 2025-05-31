const supabaseConn = require('./supabaseClient'); // Corrige el nombre si es necesario

const testSupabaseConnection = async () => {
    const { data, error } = await supabaseConn.auth.admin.listUsers();
    if (error) {
        console.log('Error de conexion :'); // Muestra el error
        return false;
    } 
    console.log('Conexion exitosa a Supabase');
   
}

testSupabaseConnection();