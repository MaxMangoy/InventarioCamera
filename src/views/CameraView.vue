<template>
  <div class="ml-64 p-8">
    <h1 class="text-3xl font-bold mb-8">Vista de Cámara en Vivo</h1>

    <div class="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto">
      <div class="camera-preview mb-4">
        <video ref="video" autoplay playsinline muted class="w-full rounded"></video>
      </div>
      <p class="text-center text-gray-600">Mostrando el feed de la cámara...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CameraView', // Nombre del componente
  data() {
    return {
      stream: null // Para almacenar el flujo de la cámara
    };
  },
  methods: {
    async startCamera() {
      try {
        // Solicita acceso a la cámara. 'environment' prefiere la cámara trasera.
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }
        });
        // Asigna el flujo de la cámara al elemento <video>
        this.$refs.video.srcObject = this.stream;
      } catch (err) {
        console.error("Error al acceder a la cámara:", err);
        alert("No se pudo acceder a la cámara. Asegúrate de que los permisos estén habilitados.");
      }
    },
    stopCamera() {
      // Detiene todas las pistas del flujo de la cámara para liberar recursos
      if (this.stream) {
        this.stream.getTracks().forEach(track => track.stop());
      }
    }
  },
  mounted() {
    // Cuando el componente se monta, inicia la cámara
    this.startCamera();
  },
  beforeUnmount() {
    // Antes de que el componente se desmonte, detén la cámara para liberar recursos
    this.stopCamera();
  }
};
</script>

<style scoped>
/* Puedes añadir estilos específicos aquí si es necesario */
</style>