import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Aquí puedes integrar con servicios como:
    // - EmailJS
    // - SendGrid
    // - Nodemailer
    // - Resend
    // - etc.

    // Por ahora, solo logueamos la información (en producción, enviarías el email)
    console.log('Nuevo mensaje de contacto:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Simular un pequeño delay para mostrar el estado de carga
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado exitosamente' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en el endpoint de contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}