import { exec } from 'child_process';

// -Db_thinlto_cache=true útil para tornar a compilação mais rápida, mas demanda mais processamento (Threads).

exec('meson setup --prefix "$(pwd)/dist" build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

exec('meson install -C build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

exec('./dist/bin/salopbar', (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

