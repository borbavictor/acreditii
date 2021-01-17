# acreditii

O Acreditti visa conectar jovens em busca de recolocação profissional ou do primeiro emprego.

A ideia é transformar o processo tradicional de recrutamento, conectando esses jovens diretamente com executivos de grandes empresas, proporcionando um primeiro contato mais informal e desburocratisado, permitindo ao jovem apresentar todo seu potecial e quem sabe até ser encaminhado para um processo seletivo.

Por outro lado, a empresa poderá ser mais inclusiva socialmente, dando oportunidades para jovens que talvez nem teriam seus currículos lidos em um processo seletivo tradicional.

Além disso, ficará salvo para o jovem o feedback do executivo, para que ele possa se aprimorar e participar de outros processos seletivos.

Acreditii em você, Acreditii em dias melhores, Acreditii no mundo... Simplesmente Acreditii!

## Tecnologias

- Ionic
- Angular
- Capacitor
- Firebase

## Como executar

- Primeiramente clone o projeto e instale os pacotes necessários:

```bash
git clone https://github.com/borbavictor/acreditii.git
cd acreditii
npm install
```

## Executando no computador

- Execute o comando abaixo no terminal do computador:

```bash
ionic serve
```

- Abra um navegador com o seguinte endereço `http://localhost:8100/`

## Executando em Android

- Configure o caminho do seu Android Studio no arquivo `capacitor.config.json`, dessa forma:

```
"linuxAndroidStudioPath": "/mnt/DATA/programas/android-studio/bin/studio.sh",
```

- Agora, precisamos compilar o projeto e depois executar a aplicação usando o Android Studio.

```bash
npx cap add android
ionic build
npx cap copy android
npx cap open android
```

## iOS

- Para o ios é o mesmo processo, porém ao invez do Android Studio, utiliza-se o XCode.

```bash
npx cap add ios
ionic build
npx cap copy ios
npx cap open ios
```

## Equipe

- Allan Siriani [https://www.linkedin.com/in/siriani/]
- Tiago Scalisse [https://www.linkedin.com/in/tiago-borges-scalisse-90635462/]
- Victor Borba [https://www.linkedin.com/in/borbavictor/]
