for i in *.md; 
	do github-markup "$i" | cat > ../html/$i.html;
done
