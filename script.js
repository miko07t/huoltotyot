 function showContent(section) {
            const content = document.getElementById("content");
            if (section === "etusivu") {
                content.className = "content green-box";
                content.innerHTML = "<h2>Etusivu</h2><p>Tervetuloa! Tarjoamme laadukkaita huoltopalveluita mobiilisti ja nopeasti.</p>";
            } else if (section === "ilmalampopumppu") {
                content.className = "content green-box";
                content.innerHTML = "<h2>Ilmalämpöpumpun pesu</h2><p>Puhdistamme ilmalämpöpumput ammattitaidolla ja tehokkaasti.</p>";
            } else if (section === "autohuolto") {
                content.className = "content green-box";
                content.innerHTML = "<h2>Autohuollot</h2><p>Tarjoamme monipuoliset huoltopalvelut, jarrujen korjauksesta katsastushylkyjen hoitoon.</p>";
            } else if (section === "ikkunanpesu") {
                content.className = "content green-box";
                content.innerHTML = "<h2>Ikkunan pesu</h2><p>Puhdistamme ikkunat kirkkaiksi kotiin ja autoon!</p>";
            } else if (section === "yhteystiedot") {
                content.className = "content purple-box";
                content.innerHTML = "<h2>Yhteystiedot</h2><p>Puhelin: 0401602192<br>Osoite: Huoltokatu 1, 00100 Helsinki<br>Sähköposti: info@huoltopalvelu.fi</p>";
            }

            // Sulje sivupalkki mobiilissa automaattisesti
            document.getElementById('sidebar').classList.remove('active');
        }

        function toggleSidebar() {
            document.getElementById('sidebar').classList.toggle('active');
        }
    </script>
</body>
</html>
